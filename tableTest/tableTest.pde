//from Daniel Shiffman's tutorial: https://www.youtube.com/watch?v=woaR-CJEwqc

void setup() { 
size (600, 400);
background (255, 0, 0);
}

void draw() { 

Table table = loadTable ("data.csv", "header");

TableRow row = table.getRow(1);

float x = row.getInt ("x");
float y = row.getInt ("y");
float w = row.getInt ("w");
float h = row.getInt ("h");


rect (x,y,w,h);

saveTable(table, "data/data.csv");
}
