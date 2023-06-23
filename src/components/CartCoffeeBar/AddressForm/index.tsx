import { MapPinLine } from '@phosphor-icons/react'
import { ContainerForm, Tittle, FormStyled } from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { CoffeeBarContext, Address } from '../../../context/CoffeeBarContext'

export function AddressForm({ formRef }: any) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Address>()

  const { setOrderAddress, setWatchCep } = useContext(CoffeeBarContext)
  const cep = watch('cep')

  useEffect(() => {
    if (cep >= 10000000) {
      setWatchCep([cep])
    }
  }, [cep, setWatchCep])

  const onSubmit: SubmitHandler<Address> = (data) => {
    setOrderAddress(data)
  }
  return (
    <ContainerForm>
      <Tittle>
        <div>
          <span>
            <MapPinLine size={22} />
          </span>
          Endereço de Entrega
        </div>
        <a>Informe o endereço onde deseja receber seu pedido</a>
      </Tittle>
      <FormStyled>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(errors).length > 0 ? (
            <div className="error-message">*Preencha os campos em vermelho</div>
          ) : (
            <span></span>
          )}

          <input
            placeholder="CEP"
            type="text"
            id="cep"
            {...register('cep', { required: true })}
            className={`small ${errors.cep ? 'error' : 'small'}`}
          />

          <input
            placeholder="Rua"
            type="text"
            id="rua"
            {...register('rua', { required: true })}
            className={`large ${errors.rua ? 'error' : 'large'}`}
          />

          <div>
            <input
              placeholder="Número"
              type="text"
              id="numero"
              {...register('numero', { required: true })}
              className={`small ${errors.numero ? 'error' : 'small'}`}
            />

            <input
              placeholder="Complemento"
              type="text"
              id="complemento"
              {...register('complemento')}
              className="l-medium"
            />
          </div>
          <div>
            <input
              placeholder="Bairro"
              type="text"
              id="bairro"
              {...register('bairro', { required: true })}
              className={`small ${errors.bairro ? 'error' : 'small'}`}
            />

            <input
              placeholder="Cidade"
              type="text"
              id="cidade"
              {...register('cidade', { required: true })}
              className={`medium ${errors.cidade ? 'error' : 'medium'}`}
            />

            <input
              placeholder="UF"
              type="text"
              id="uf"
              {...register('uf', { required: true })}
              className={`tiny ${errors.uf ? 'error' : 'tiny'}`}
            />
          </div>
        </form>
      </FormStyled>
    </ContainerForm>
  )
}
