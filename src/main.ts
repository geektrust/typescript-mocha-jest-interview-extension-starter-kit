import TravelCost from "./travelCost";

function main(): void {
  const args: string[] = process.argv.slice(2);

  if (args.length === 0) {
    throw new Error("No command line arguments passed");
  }

  const input: string = args[0];
  handle(input);
}

function handle(input: string): void {
  const inputList: string[] = input.trim().split(" ");

  const numTravelers: number = parseInt(inputList[0], 10);
  const destination: string = inputList[1];
  const tripType: string = inputList[2];

  try {
    const totalCost = TravelCost.calculateCost(
      numTravelers,
      destination,
      tripType
    );

    console.log("Total Flight Cost: " + totalCost);
  } catch (error: any) {
    console.log(error.message);
  }
}

main();

export { handle };
