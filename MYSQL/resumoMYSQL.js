import connection from "./connect.js";
import fs from "fs";

const caminhoCSV = "./russia_losses_equipment.csv";
async function carregaResumo() {
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
          const total =
            Number(elemento[2]) +
            Number(elemento[3]) +
            Number(elemento[4]) +
            Number(elemento[5]) +
            Number(elemento[6]) +
            Number(elemento[7]) +
            Number(elemento[8]) +
            Number(elemento[9]) +
            Number(elemento[10]) +
            Number(elemento[11]) +
            Number(elemento[12]) +
            Number(elemento[13]) +
            Number(elemento[14]);
            connection.query(`insert into RESUMO(dia, DATA, total) values(${dia}, '${data}', ${total})`, function (error, results, fields) {
              if (error) throw error;
              console.log("AQUI: ",results);
            });
        }
       
      }
    }

    
    
  });
}
carregaResumo();
