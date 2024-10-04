import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoLanche } from "@/types";
import { console } from "inspector";

export async function GET() {

    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const data = JSON.parse(file);
    return NextResponse.json(data);
}

export async function POST(request:Request) {

    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const produtos:TipoLanche[] = JSON.parse(file);

    //Realizar o destructuring do objeto
    //const{id, nome } = await request.json();
    //console.log("ID: ", id );
    //console.log("Nome: ", nome );

    const produto:TipoLanche = await request.json();
    console.log("Produto: ", produto);

    const novoId = produtos[produtos.length + 1].id + 1;

    produto.id = novoId;

    produtos.push(produto);

    const fileupdate = JSON.stringify(produtos);

    await fs.writeFile(process.cwd() + '/src/data/base.json', fileupdate);


    return NextResponse.json(produto, { status: 201 });
}