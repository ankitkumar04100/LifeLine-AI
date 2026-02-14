from models.emergencyModel import EmergencyModel

# Placeholder emergency protocols (can be replaced with DB/ML integration)
emergency_protocols = {
    "Heart Attack": ["Call 911", "Check airway", "Start CPR"],
    "Respiratory Emergency": ["Check breathing", "Provide oxygen if trained"]
}

def get_emergency_steps(emergency_type: str) -> EmergencyModel:
    steps = emergency_protocols.get(emergency_type, ["Follow general safety protocol"])
    emergency = EmergencyModel(type=emergency_type, steps=steps)
    return emergency
