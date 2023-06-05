-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userType" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Citizen" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "houseNumber" TEXT NOT NULL,
    "referencePoint" TEXT NOT NULL,
    "numFossas" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UrbanServiceAppointment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "citizenId" INTEGER NOT NULL,
    "serviceType" TEXT NOT NULL,
    "appointmentDate" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "UrbanServiceAppointment_citizenId_fkey" FOREIGN KEY ("citizenId") REFERENCES "Citizen" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AgricultureService" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicle" TEXT NOT NULL,
    "driver" TEXT NOT NULL,
    "serviceHours" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "requester" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cnh" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ServiceAgriculture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "requester" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "serviceHours" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "property" TEXT NOT NULL,
    "landSize" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Citizen_cpf_key" ON "Citizen"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_cpf_key" ON "Driver"("cpf");
