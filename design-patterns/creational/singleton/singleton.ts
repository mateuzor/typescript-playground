export class MyDatabase {
  private static instance?: MyDatabase | null = null;

  private constructor() {}

  public static get getInstance(): MyDatabase {
    if (!MyDatabase.instance) {
      MyDatabase.instance = new MyDatabase();
    }
    return MyDatabase.instance;
  }
}

const db1 = MyDatabase.getInstance;
const db2 = MyDatabase.getInstance;

console.log(db1 === db2);
