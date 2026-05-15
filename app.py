# ================================
# FILE: backend/app.py
# AI-BASED SAFETY SURVEILLANCE SYSTEM
# BACKEND - FLASK API SERVER
# ================================

from flask import Flask, jsonify, request
from flask_cors import CORS
from ultralytics import YOLO
import cv2

app = Flask(__name__)
CORS(app)

# Load trained YOLO model
model = YOLO('best.pt')


# ================================
# HOME API
# ================================
@app.route('/')
def home():
    return jsonify({
        'message': 'AI Safety Surveillance Backend Running'
    })


# ================================
# SYSTEM STATUS API
# ================================
@app.route('/status')
def status():
    return jsonify({
        'model': 'Running',
        'cameras_online': 4,
        'alerts_today': 2
    })


# ================================
# AI DETECTION API
# ================================
@app.route('/detect', methods=['POST'])
def detect():
    # Placeholder detection logic
    # Replace with real camera/image processing
    return jsonify({
        'status': 'success',
        'alert': 'Worker without helmet detected',
        'confidence': '96%'
    })


# ================================
# RUN SERVER
# ================================
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
