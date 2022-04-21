import fs from "fs";

const caminhoCSV = "./russia_losses_equipment.csv";
async function carregaEquipamentos() {
  fs.readFile(caminhoCSV, "utf8", function (err, data) {
    let lista = data.split("\n");

    for (let index = 0; index < lista.length; index++) {
      const element = lista[index];
      if (index > 0) {
        const elemento = element.split(",");
        if (elemento[0]) {
          const data = elemento[0];
          const dia = elemento[1];
          elemento[2];

          console.log(
            `put 'equipamentos', ${dia}, 'aereo:aircraft',${Number(
              elemento[2]
            )} `
          );
          console.log(
            `put 'equipamentos', ${dia}, 'aereo:helicopter',${Number(
              elemento[3]
            )} `
          );
          console.log(
            `put 'equipamentos', ${dia}, 'aereo:drone',${Number(elemento[10])} `
          );

          console.log(
            `put 'equipamentos', ${dia}, 'terreo:tank',${Number(elemento[4])} `
          );
          console.log(
            `put 'equipamentos', ${dia}, 'terreo:fuel_tank',${Number(
              elemento[9]
            )} `
          );
          console.log(
            `put 'equipamentos', ${dia}, 'terreo:military_auto',${Number(
              elemento[8]
            )} `
          );

          console.log(
            `put 'equipamentos', ${dia}, 'armas:field_artilery',${Number(
              elemento[6]
            )} `
          );
          console.log(
            `put 'equipamentos', ${dia}, 'armas:anti_aircraft_warface',${Number(
              elemento[12]
            )} `
          );

          console.log(
            `put 'equipamentos', ${dia}, 'naval:naval_ship',${Number(
              elemento[11]
            )} `
          );

          console.log(
            `put 'equipamentos', ${dia}, 'especiais:apc',${Number(
              elemento[12]
            )} `
          );
          console.log(
            `put 'equipamentos', ${dia}, 'especiais:mrl',${Number(
              elemento[7]
            )} `
          );

          console.log(
            `put 'equipamentos', ${dia}, 'especiais:special_equipament',${Number(
              elemento[8]
            )} `
          );

          console.log(
            `put 'equipamentos', ${dia}, 'especiais:mobile_srbm_system',${Number(
              elemento[13]
            )} `
          );
        }
      }
    }
  });
}
carregaEquipamentos();
