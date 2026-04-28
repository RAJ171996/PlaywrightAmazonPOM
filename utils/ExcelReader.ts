import * as XLSX from 'xlsx';
import * as path from 'path';

export class ExcelReader {

  static readExcel(fileName: string, sheetIndex = 0) {

    const filePath = path.resolve(process.cwd(), 'testdata', fileName);

    const workbook = XLSX.readFile(filePath);

    const sheetName = workbook.SheetNames[sheetIndex];

    const sheet = workbook.Sheets[sheetName];

    return XLSX.utils.sheet_to_json(sheet);
  }
}