CREATE TABLE Cliente (
    ClienteID VARCHAR(50) PRIMARY KEY,
    Nombre VARCHAR(100),
    Apellido VARCHAR(100),
    Email VARCHAR(100),
    Teléfono VARCHAR(20)
);

CREATE TABLE Agencia (
    AgenciaID VARCHAR(50) PRIMARY KEY,
    Nombre VARCHAR(100),
    Dirección VARCHAR(200)
);

CREATE TABLE Coche (
    CocheID VARCHAR(50) PRIMARY KEY,
    Modelo VARCHAR(100),
    Marca VARCHAR(100),
    NumeroDeGaraje VARCHAR(50) NOT NULL
);

CREATE TABLE Reserva (
    ReservaID VARCHAR(50) PRIMARY KEY,
    ClienteID VARCHAR(50),
    AgenciaID VARCHAR(50),
    FechaInicio DATE,
    FechaFin DATE,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID),
    FOREIGN KEY (AgenciaID) REFERENCES Agencia(AgenciaID)
);

CREATE TABLE ReservaCoche (
    ReservaID VARCHAR(50),
    CocheID VARCHAR(50),
    PRIMARY KEY (ReservaID, CocheID),
    FOREIGN KEY (ReservaID) REFERENCES Reserva(ReservaID),
    FOREIGN KEY (CocheID) REFERENCES Coche(CocheID)
);
