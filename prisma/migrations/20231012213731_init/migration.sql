-- CreateTable
CREATE TABLE "Employee_test" (
    "id" SERIAL NOT NULL,
    "firtName" TEXT,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Employee_test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_test_email_key" ON "Employee_test"("email");
