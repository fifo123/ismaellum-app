import { useMutation, useQuery } from '@apollo/client';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { UiButton } from '../../components/atoms/Button';
import { UiTypography } from '../../components/atoms/Typography';
import { ListProducts } from '../../components/molecules/ListProducts';
import { Header } from '../../components/templates/Header';
import Banner from '../../shared/assets/Banner.png';
import { GET_USER } from '../Home/query/getUser';
import { Layout } from '../Home/styles';
import { BUY_PRODUCT } from './mutation/buyProduct';
import { GET_PRODUCTS } from './query/getProducts';
import { ModalContainer, ProductContainer } from './styles';

export function Store() {
  const { data } = useQuery(GET_PRODUCTS);
  const userQuery = useQuery(GET_USER);

  const [buyProduct] = useMutation(BUY_PRODUCT);

  const [openModal, setOpenModal] =
    useState<{ product?: any; open?: boolean; type?: 'denied' | 'approved' }>();

  const categories = data?.listProductCategory?.reduce(
    (acc: any, category: any) => {
      if (!acc?.includes(category?.category?.name)) {
        acc.push(category?.category?.name);
      }
      return acc;
    },
    []
  );

  const getItems = (categoryRow: any) => {
    const products = data?.listProductCategory?.filter(
      (pCategory: any) => pCategory?.category?.name === categoryRow
    );
    return products.map((product: any) => ({
      image: `http://localhost:3000/get-image/?imagem=${product?.product?.picture}`,
      name: product?.product?.name,
      subtitle: `${product?.product?.creditsPrice} C`,
      onClickCard: () => {
        setOpenModal({
          open: true,
          product: product?.product,
          type:
            userQuery?.data?.user.stats.credits >=
            product?.product?.creditsPrice
              ? 'approved'
              : 'denied'
        });
      }
    }));
  };

  return (
    <>
      <Header name="Loja" />
      <Box mb={3} />
      <Box display="flex" justifyContent="center">
        <UiTypography variant="h5" fontColor="darkPrimary">
          Você possui: {userQuery?.data?.user.stats.credits} créditos
        </UiTypography>
      </Box>
      <Layout>
        <Box mb={3} />
        <img src={Banner} style={{ width: '100%' }} />
        {categories?.map((category: any) => (
          <>
            <Box mb={3} />
            <ListProducts
              category={category}
              productsCards={getItems(category)}
            />
          </>
        ))}
      </Layout>
      <BuyProductModal
        open={openModal?.open && openModal.type === 'approved'}
        product={openModal?.product}
        onClose={() =>
          setOpenModal({
            open: false,
            product: undefined,
            type: undefined
          })
        }
        onConfirm={async () => {
          await buyProduct({
            variables: {
              product_id: openModal?.product?.product_id
            }
          });
          await userQuery.refetch();
          setOpenModal({
            open: false,
            product: undefined,
            type: undefined
          });
          toast.success(
            `Item: ${openModal?.product?.name}, coletado com sucesso, contate o responsável para retirar o seu produto`
          );
        }}
      />
      <DeniedBuyModal
        open={!!(openModal?.open && openModal.type === 'denied')}
        onClose={() =>
          setOpenModal({
            open: false,
            product: undefined,
            type: undefined
          })
        }
        product={openModal?.product}
        currentCredits={userQuery?.data?.user.stats.credits}
      />
    </>
  );
}

type BuyProductModalProps = {
  open?: boolean;
  product?: any;
  currentCredits?: any;
  onClose: () => void;
  onConfirm: () => void;
};

function BuyProductModal({
  open,
  product,
  onClose,
  onConfirm
}: BuyProductModalProps) {
  return (
    <Dialog open={!!(open && !!product)} onClose={onClose}>
      <DialogTitle>Deseja realmente comprar o produto?</DialogTitle>
      <DialogContent dividers>
        <ModalContainer>
          <ProductContainer>
            <img
              src={`http://localhost:3000/get-image/?imagem=${product?.picture}`}
            />
          </ProductContainer>
          Você esta prestes a comprar o produto:
          <strong>{product?.name}</strong>
          <label>{product?.description}</label>
          <label>
            Pelo valor de: <strong>{product?.creditsPrice}</strong> C
          </label>
        </ModalContainer>
      </DialogContent>
      <DialogActions>
        <UiButton variant="contained" color="default" onClick={onClose}>
          Cancelar
        </UiButton>
        <UiButton
          fullWidth
          variant="contained"
          color="secondary"
          onClick={onConfirm}
        >
          Confirmar compra
        </UiButton>
      </DialogActions>
    </Dialog>
  );
}

type DeniedBuyModalProps = {
  onClose: () => void;
  open: boolean;
  product?: any;
  currentCredits?: any;
};

function DeniedBuyModal({
  onClose,
  open,
  product,
  currentCredits
}: DeniedBuyModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Você não possui créditos suficiente</DialogTitle>
      <DialogContent dividers>
        <ModalContainer>
          Você possui: {currentCredits}
          <label>O preço do produto é: {product?.creditsPrice}</label>
          <strong>
            Está faltando {product?.creditsPrice - currentCredits || ''}{' '}
            créditos
          </strong>
        </ModalContainer>
      </DialogContent>
      <DialogActions>
        <UiButton
          fullWidth
          variant="contained"
          color="secondary"
          onClick={onClose}
        >
          Voltar
        </UiButton>
      </DialogActions>
    </Dialog>
  );
}
