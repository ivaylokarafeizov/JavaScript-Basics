function tennisEquipment(input) {
    let racketPricePerOne = Number(input[0]);
    let racketsCount = Number(input[1]);
    let sneakers = Number(input[2]);

    let racketsPrice = racketsCount * racketPricePerOne;
    let sneakersPairPrice = racketPricePerOne / 6;
    let sneakersPrice = sneakers * sneakersPairPrice;
    let otherEquipmentPrice = (racketsPrice + sneakersPrice) * 0.2;
    let sum = racketsPrice + sneakersPrice + otherEquipmentPrice;

    let djokovichPrice = sum / 8;
    let sponsorsPrice = (sum * 7) / 8;

    console.log(`Price to be paid by Djokovic ${Math.floor(djokovichPrice)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsPrice)}`);
}

tennisEquipment(["386", "7", "4"]);