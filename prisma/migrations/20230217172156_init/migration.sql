-- CreateTable
CREATE TABLE "Sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product" TEXT NOT NULL,
    "date_purchase" TEXT NOT NULL,
    "productvalue_purchase" REAL NOT NULL,
    "unity_purchase" REAL NOT NULL,
    "total_money_purchase" REAL NOT NULL,
    "date_sale" TEXT,
    "productvalue_sale" REAL,
    "unity_sale" REAL,
    "total_money_sale" REAL,
    "profit" REAL
);
