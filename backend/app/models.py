from pydantic import BaseModel

class Meteorito(BaseModel):
    lat: float
    lon: float
    diametro: float  # km
    velocidad: float # km/s
    angulo: float    # grados
