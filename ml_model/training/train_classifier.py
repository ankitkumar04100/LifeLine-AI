from sklearn.ensemble import RandomForestClassifier
import joblib
from preprocess_data import load_and_preprocess

# Load and preprocess heart attack dataset
(X_train, X_test, y_train, y_test), scaler = load_and_preprocess("../dataset/heart_attack.csv")

# Train a simple RandomForest classifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# Save model and scaler for offline inference
joblib.dump(clf, "../inference/emergency_classifier.pkl")
joblib.dump(scaler, "../inference/scaler.pkl")

print("Offline ML model trained and saved!")
