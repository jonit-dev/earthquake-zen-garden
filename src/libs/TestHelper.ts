export class TestHelper {
  public sayHello() {
    console.log("hello");
  }

  public sum(n1: number, n2: number) {
    return n1 + n2;
  }
}

export const testHelper = new TestHelper();
