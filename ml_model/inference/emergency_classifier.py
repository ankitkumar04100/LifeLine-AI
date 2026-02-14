import joblib
import numpy as np

# Load trained model and scaler
clf = joblib.load("emergency_classifier.pkl")
scaler = joblib.load("scaler.pkl")

def predict_emergency(input_data: dict) -> bool:
    """
    input_data example: {'symptom_chest_pain':1, 'severity':5, 'age':60}
    Returns: True if emergency, False otherwise
    """
    X = np.array([list(input_data.values())])
    X_scaled = scaler.transform(X)
    prediction = clf.predict(X_scaled)
    return bool(prediction[0])

# Example usage
if __name__ == "__main__":
    sample = {'symptom_chest_pain':1, 'severity':5, 'age':60}
    print("Emergency:", predict_emergency(sample))
