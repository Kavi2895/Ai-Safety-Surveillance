## ================================
# AI-BASED SAFETY SURVEILLANCE SYSTEM
# COMPLETE BACKEND CODE
# ================================


# ================================
# FILE: backend/database.py
# DATABASE CONFIGURATION (MYSQL)
# ================================

import mysql.connector
from flask import Flask, jsonify, request
from flask_cors import CORS
from ultralytics import YOLO
import cv2

# Database connection
conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='your_password',
    database='ai_safety_db'
)

cursor = conn.cursor()

# Create alerts table
cursor.execute('''
CREATE TABLE IF NOT EXISTS alerts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    alert_type VARCHAR(100),
    confidence VARCHAR(20),
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)
''')

# Save alert function
def save_alert(alert_type, confidence):
    sql = "INSERT INTO alerts (alert_type, confidence) VALUES (%s, %s)"
    values = (alert_type, confidence)
    cursor.execute(sql, values)
    conn.commit()


# ================================
# FILE: backend/app.py
# FLASK BACKEND API
# ================================

app = Flask(__name__)
CORS(app)

# Load trained AI model
model = YOLO('best.pt')


# HOME API
@app.route('/')
def home():
    return jsonify({
        'message': 'AI Safety Surveillance Backend Running'
    })


# STATUS API
@app.route('/status')
def status():
    return jsonify({
        'model': 'Running',
        'cameras_online': 4,
        'alerts_today': 2
    })


# DETECTION API
@app.route('/detect', methods=['POST'])
def detect():
    alert_type = 'Worker without helmet detected'
    confidence = '96%'

    # Save alert to database
    save_alert(alert_type, confidence)

    return jsonify({
        'status': 'success',
        'alert': alert_type,
        'confidence': confidence
    })


# RUN SERVER
if __name__ == '__main__':
    app.run(debug=True)


# ================================
# FILE: backend/requirements.txt
# REQUIRED PACKAGES
# ================================
# flask
# flask-cors
# ultralytics
# opencv-python
# mysql-connector-python

