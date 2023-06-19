const product = {
  produto: "CPU Dual Core 3.0GHZ",
  lote: 321,
  ano: 2022,
  qtd: 5,
};

const infoTags = (infoProduct: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  const listTags: string[] = [];
  for (let index = 1; index <= infoProduct.qtd; index++) {
    let tag = `${infoProduct.lote}-${infoProduct.ano}-${index
      .toString()
      .padStart(3, "0")}`;
    listTags.push(tag);
  }
  return listTags;
};

console.log(infoTags(product));
