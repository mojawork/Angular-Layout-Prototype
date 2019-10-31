export class GridcardsFormUtils {
  public validateCardColums(colums: string, cardColumValue: string): string {
    if (parseFloat(colums) < parseFloat(cardColumValue)) {
      return colums;
    }
    return cardColumValue;
  }

}
