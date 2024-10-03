"use client";
import { TipoLanche } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Produtos() {

    const [lista, setLista] = useState<TipoLanche[]>([]);
    
    useEffect(() => {
        
        const chamadaDaApi = async () =>{
            const response = await fetch("http://localhost:3000/api/base-route");
            const dados = await response.json();
            setLista(dados);
        };

        chamadaDaApi();
    }, [])
    

    return (
        <div>
            <h2>Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>R$</th>
                        <th>DESCRIÇÃO</th>
                        <th>EDITAR</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((lanche) => (
                        <tr key={lanche.id}>
                            <td>{lanche.id}</td>
                            <td>{lanche.nome}</td>
                            <td>{lanche.preco}</td>
                            <td>{lanche.desc}</td>
                            <td> <Link href={`/produtos/produto/${lanche.id}`}>Editar</Link></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            Quantidade de lanches : {lista.length}
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}
