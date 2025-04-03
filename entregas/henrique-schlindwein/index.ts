import { Artigo } from "./Artigo";
import { Livro } from "./Livro";
import { Revista } from "./Revista";
import { MaterialLeitura } from "./MaterialLeitura";

const livro = new Livro("Livro legal","Autor1", 350);
const artigo = new Artigo("Artigo Legal","Autor2", new Date(2024-25-12));
const revista = new Revista("Revista Legal","Autor3",23);

livro.exibirDetalhes();
artigo.exibirDetalhes();
revista.exibirDetalhes();
