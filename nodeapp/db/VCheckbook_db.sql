CREATE TABLE Users
(
  User_Id INT NOT NULL AUTO_INCREMENT,
  User_Name VARCHAR(255) NOT NULL,
  User_Pass VARCHAR(255) NOT NULL,
  User_Fname VARCHAR(50) NOT NULL,
  User_Lname VARCHAR(50) NOT NULL,
  PRIMARY KEY (User_Id)
);

CREATE TABLE Balances
(
  Balance_Id INT NOT NULL AUTO_INCREMENT,
  Balance_Name VARCHAR(255) NOT NULL,
  Balance_Amount FLOAT NOT NULL,
  Balance_Date_Made DATE NOT NULL,
  User_Id INT NOT NULL,
  PRIMARY KEY (Balance_Id),
  FOREIGN KEY (User_Id) REFERENCES Users(User_Id)
);

CREATE TABLE Balance_Changes
(
  Change_Id INT NOT NULL AUTO_INCREMENT,
  Change_Name VARCHAR(255) NOT NULL,
  Change_Amount FLOAT NOT NULL,
  Change_Date DATE NOT NULL,
  Balance_Id INT NOT NULL,
  PRIMARY KEY (Change_Id),
  FOREIGN KEY (Balance_Id) REFERENCES Balances(Balance_Id)
);