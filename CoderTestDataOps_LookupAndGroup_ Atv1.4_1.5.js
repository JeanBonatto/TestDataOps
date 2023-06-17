[
    {
      //Usado para fazer o Join
      $lookup: {
        from: "Montadoras",
        localField: "Montadora",
        foreignField: "Montadora",
        as: "Montadora_info",
      },
    },
  
    {
      //Utilizado para tirar o Array
      $unwind: "$Montadora_info",
    },
  
    {
      //Estabele quais colunas devem ter no projeto
      $project: {
        _id: 1,
        Carro: 1,
        Cor: 1,
        Montadora: 1,
        País: "$Montadora_info.País",
      },
    },
    {
      //Agrupa os carrops pelo países
      $group: {
        _id: "$País",
        Carros: { $push: "$Carro" },
      },
    },
  ]