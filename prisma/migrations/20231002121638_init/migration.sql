-- CreateTable
CREATE TABLE "Employee_test" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firtName" TEXT,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_test_email_key" ON "Employee_test"("email");
