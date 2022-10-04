export class commonUtils {
  static convertArrayToObjectByID(array: any[]) {
    return array.reduce((object, cur) => {
      object[cur["id"]] = cur;
      return object;
    });
  }
}
