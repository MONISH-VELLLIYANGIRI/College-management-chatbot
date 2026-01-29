#!/usr/bin/env python3
"""
Script to load dataset from HuggingFace and generate mock database in TypeScript format
"""

from datasets import load_dataset
import json
from datetime import datetime, timedelta
import random
import names

# Load the dataset
print("Loading dataset from HuggingFace...")
ds = load_dataset("SleepyTerr/college_student_scores")

# Get the training split
if 'train' in ds:
    data = ds['train']
else:
    data = ds

print(f"Loaded {len(data)} records from HuggingFace")

# Transform data to our format
students_db = {}
attendance_db = {}
academics_db = {}
fees_db = {}

departments = ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical", "Information Technology"]
years = [1, 2, 3, 4]
subjects_by_dept = {
    "Computer Science": ["Data Structures", "Web Development", "Database Systems", "Machine Learning", "Algorithms"],
    "Electronics": ["Circuit Theory", "Signals & Systems", "Digital Electronics", "Microprocessors", "Power Electronics"],
    "Mechanical": ["Thermodynamics", "Mechanics", "Materials Science", "Heat Transfer", "Dynamics"],
    "Civil": ["Structural Analysis", "Surveying", "Hydraulics", "Concrete Technology", "Soil Mechanics"],
    "Electrical": ["Power Systems", "Control Systems", "Electrical Machines", "Power Electronics", "Switchgear"],
    "Information Technology": ["Database Management", "Web Technologies", "Networks", "Software Engineering", "Cloud Computing"],
}

# Map test scores to percentages (assuming scores out of 100)
def map_score_to_percentage(score):
    if score is None:
        return random.randint(60, 100)
    return min(100, max(0, int(score)))

def score_to_grade(score):
    """Convert percentage score to letter grade"""
    if score >= 90:
        return "A", 4.0
    elif score >= 85:
        return "A-", 3.7
    elif score >= 80:
        return "B+", 3.3
    elif score >= 75:
        return "B", 3.0
    elif score >= 70:
        return "B-", 2.7
    elif score >= 65:
        return "C+", 2.3
    elif score >= 60:
        return "C", 2.0
    else:
        return "D", 1.0

# Limit processing to first 100 students for reasonable file size
max_students = 100
processed = 0

for i, record in enumerate(data):
    if processed >= max_students:
        break
    
    try:
        # Generate student ID from original Student_ID
        original_id = record.get('Student_ID', i + 1)
        student_id = f"STU{(original_id):05d}" if isinstance(original_id, int) else f"STU{(i+1):05d}"
        
        # Generate realistic student name
        name = names.get_full_name()
        
        # Assign department based on modulo
        dept = departments[i % len(departments)]
        
        # Assign year based on modulo
        year = years[i % len(years)]
        
        # Create student record
        students_db[student_id] = {
            "id": student_id,
            "name": name,
            "dept": dept,
            "year": year,
            "email": f"{name.lower().replace(' ', '.')}@university.edu",
        }
        
        # Extract test scores from dataset
        test_score_1 = record.get('Past_Test_Score_1', 75)
        test_score_2 = record.get('Past_Test_Score_2', 75)
        test_score_3 = record.get('Past_Test_Score_3', 75)
        attendance_rate = record.get('Class_Attendance_Rate', 80)
        gpa_dataset = record.get('GPA', 3.0)
        
        # Convert to percentages
        test_1_pct = map_score_to_percentage(test_score_1)
        test_2_pct = map_score_to_percentage(test_score_2)
        test_3_pct = map_score_to_percentage(test_score_3)
        attendance_pct = map_score_to_percentage(attendance_rate)
        
        # Create attendance records for department subjects
        dept_subjects = subjects_by_dept.get(dept, ["Subject 1", "Subject 2", "Subject 3"])
        attendance_db[student_id] = []
        
        for j, subject in enumerate(dept_subjects[:3]):
            # Use dataset scores for attendance percentages
            scores = [attendance_pct, test_2_pct, test_3_pct]
            score = scores[j] if j < len(scores) else random.randint(70, 95)
            
            attendance_db[student_id].append({
                "studentId": student_id,
                "subject": subject,
                "percentage": min(100, int(score)),
                "lastUpdated": (datetime.now() - timedelta(days=j)).strftime("%Y-%m-%d"),
            })
        
        # Create academics records using dataset GPA and test scores
        semester = min(year * 2, 8)
        grades = {}
        gpa_points = 0
        
        test_scores = [test_1_pct, test_2_pct, test_3_pct]
        for k, subject in enumerate(dept_subjects[:3]):
            score = test_scores[k] if k < len(test_scores) else random.randint(70, 95)
            grade, gpa_point = score_to_grade(score)
            grades[subject] = grade
            gpa_points += gpa_point
        
        # Calculate GPA with some weight from dataset GPA
        calculated_gpa = round(gpa_points / 3, 2)
        final_gpa = round((calculated_gpa * 0.6 + float(gpa_dataset) * 0.4), 2)
        status = "good" if final_gpa >= 3.5 else "warning" if final_gpa >= 2.5 else "probation"
        
        academics_db[student_id] = [{
            "studentId": student_id,
            "semester": semester,
            "gpa": final_gpa,
            "grades": grades,
            "status": status,
        }]
        
        # Create fees records
        fees_db[student_id] = []
        for sem in range(max(1, semester-1), semester+1):
            total_fee = 50000
            # Vary payment status
            if sem == semester:
                paid_amount = random.choice([0, 25000, 50000])
            else:
                paid_amount = 50000
            
            due_amount = total_fee - paid_amount
            status_fee = "paid" if due_amount == 0 else "partial" if paid_amount > 0 else "pending"
            
            fees_db[student_id].append({
                "studentId": student_id,
                "semester": sem,
                "totalFee": total_fee,
                "paidAmount": paid_amount,
                "dueAmount": due_amount,
                "status": status_fee,
                "dueDate": (datetime.now() + timedelta(days=30*sem)).strftime("%Y-%m-%d"),
            })
        
        processed += 1
        
    except Exception as e:
        print(f"Error processing record {i}: {e}")
        continue

print(f"Processed {processed} students from HuggingFace dataset")

# Generate TypeScript file
ts_output = f"""// Mock database with data from HuggingFace dataset: SleepyTerr/college_student_scores
// Generated on: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
// Total records processed: {processed}

import type {{ Student, Attendance, Timetable, Fee, Academic }} from "@/types"

export const studentsDB: Record<string, Student> = {json.dumps(students_db, indent=2)}

export const attendanceDB: Record<string, Attendance[]> = {json.dumps(attendance_db, indent=2)}

export const feesDB: Record<string, Fee[]> = {json.dumps(fees_db, indent=2)}

export const academicsDB: Record<string, Academic[]> = {json.dumps(academics_db, indent=2)}

export const timetableDB: Timetable[] = [
  {{ day: "Monday", subject: "Data Structures", time: "09:00 - 10:30", room: "A101", instructor: "Dr. Sharma" }},
  {{ day: "Monday", subject: "Web Development", time: "11:00 - 12:30", room: "B202", instructor: "Prof. Verma" }},
  {{ day: "Tuesday", subject: "Database Systems", time: "09:00 - 10:30", room: "A101", instructor: "Dr. Malhotra" }},
  {{ day: "Wednesday", subject: "Circuit Theory", time: "10:00 - 11:30", room: "C303", instructor: "Prof. Singh" }},
  {{ day: "Thursday", subject: "Thermodynamics", time: "09:00 - 10:30", room: "D404", instructor: "Dr. Desai" }},
  {{ day: "Friday", subject: "Web Development", time: "14:00 - 15:30", room: "B202", instructor: "Prof. Verma" }},
]

export const getStudentById = (id: string): Student | undefined => studentsDB[id]
export const getAttendance = (studentId: string): Attendance[] => attendanceDB[studentId] || []
export const getTimetable = (day?: string): Timetable[] => {{
  if (!day) return timetableDB
  return timetableDB.filter((t) => t.day.toLowerCase() === day.toLowerCase())
}}
export const getFees = (studentId: string): Fee[] => feesDB[studentId] || []
export const getAcademics = (studentId: string): Academic[] => academicsDB[studentId] || []
"""

# Write to file
output_file = "mock-database-huggingface.ts"
with open(output_file, "w") as f:
    f.write(ts_output)

print(f"Generated TypeScript file: {output_file}")
print(f"File size: {len(ts_output)} bytes")
print(f"\nNow run this command to replace the original mock database:")
print(f"move mock-database-huggingface.ts data/mock-database.ts")
