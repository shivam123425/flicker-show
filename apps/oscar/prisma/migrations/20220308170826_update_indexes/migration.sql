-- DropIndex
DROP INDEX "Profile_userId_id_idx";

-- DropIndex
DROP INDEX "User_email_id_idx";

-- CreateIndex
CREATE INDEX "Profile_userId_idx" ON "Profile"("userId");

-- CreateIndex
CREATE INDEX "Profile_id_idx" ON "Profile"("id");

-- CreateIndex
CREATE INDEX "User_id_idx" ON "User"("id");
