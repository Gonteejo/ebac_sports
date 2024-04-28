import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

import { Produto as ProdutoType } from '../App'

import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({
  produtos
}: Props) => {
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
