import React, { useEffect, useState } from "react";
import api  from '../../components/Services/api';
import { PieChart, Pie, Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,} from "recharts";

export default function Relatorio_estoque() {

    const url = "/produto"

    const [entries, setEntries] = useState({
        data: [
            {
                nomeProduto: "",
                quantidadeEstoqueMinima: ""
            }
        ]
    });

    useEffect(() => {
        api
        .get(url)
        .then(response => {
        let data = [];
    response.data.forEach(el => {
        data.push(
        {
        nomeProduto: el.nomeProduto,
        quantidadeEstoqueMinima: el.quantidadeEstoqueMinima
        }
    );
});
    setEntries({ data: data });
})
.catch(function(error) {
        console.log(error);
    });
}, []);

console.log(entries);



const data = [
    { name: "Eletrônicos", users: 2000000000 },
    { name: "Brinquedos", users: 1500000000 },
    { name: "Roupas", users: 1000000000 },
    { name: "Outros", users: 500000000 },
  ];
    
      return (

        <div style={{ textAlign: "center" }}>
          <h1>Relatório de estoque</h1>
          <div className="App">

            <PieChart width={400} height={400}>
              <Pie dataKey="users" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
            
            <BarChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 80,bottom: 5,}}barSize={20}>
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>

          </div>
        </div>
      );
}
