from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI(title="LifeLine AI Backend")

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load emergency instructions from JSON
with open("emergency_data.json", "r") as f:
    emergency_instructions = json.load(f)

@app.get("/")
def read_root():
    return {"status": "LifeLine AI backend running"}

@app.get("/emergency/{emergency_type}")
def get_emergency_instructions(emergency_type: str):
    instructions = emergency_instructions.get(
        emergency_type, ["Follow general safety guidelines"]
    )
    return {"emergency": emergency_type, "instructions": instructions}
