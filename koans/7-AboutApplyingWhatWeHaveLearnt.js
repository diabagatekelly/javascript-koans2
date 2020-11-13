describe("7. About Applying What We Have Learnt", () => {

  let products;

  beforeEach(() => {
    products = [
      { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
      { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
      { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
      { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
      { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", () => {

    let i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
      if (products[i].containsNuts === false) {
        hasMushrooms = false;
        for (j = 0; j < products[i].ingredients.length; j+=1) {
          if (products[i].ingredients[j] === "mushrooms") {
            hasMushrooms = true;
          }
        }
        if (!hasMushrooms) productsICanEat.push(products[i]);
      }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", () => {

    let productsICanEat = [];

    /* solve using filter() & some() / every() */

    expect(productsICanEat.length).toBe(0);
  });
  /*********************************************************************************/

  // EXTRA CHALLENGES
  it("should find the largest palindrome made from the product of two 3 digit numbers", () => {
    const isPalidrome = (item) => {
      // a palindrome is a string that is the same forwards and backwards
      let firstHalf;
      let firstArr = [];
      let secondHalf;
      let secondArr = [];
      for(let i = 0; i < item.length/2; i++){
        firstHalf = item[i];
        firstArr.push(firstHalf);
      };
      for(let j = item.length-1; j >= item.length/2; j--) {
        secondHalf = item[j];
        secondArr.push(secondHalf);
      }
      if(firstArr[0] === secondArr[0] && firstArr[1] === secondArr[1] && firstArr[2] === secondArr[2]) {
        return true;
      }
      return false;
    };

    const largestPalidrome = () => {
      let sumArray = [];
      let sum;
      let list = [];
      for (let m = 900.0000; m < 1000.0000; m++) {
        list.push(m);
      }
    for(let i = 0; i < list.length; i++) {
      for(let j = 0; j < list.length; j++){
        sum = list[i] *list[j];
        sumArray.push(sum);
        }
      }
        for(let i = 0; i < sumArray.length; i++) {
          let strArray = sumArray[i].toString();
          if(isPalidrome(strArray) && strArray > 900000){
            let string = strArray.toString();
            return string;
          }
        }
      }

    largestPalidrome();

    expect(largestPalidrome()).toBe("906609");
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", () => {
  
  });

  it("should find the 10001st prime", () => {

  });
});
