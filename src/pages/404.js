import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: ${props => props.theme.colors.text};
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" description="Страница не найдена" />
    <Container>
      <PageTitle>Упс... Страница не найдена.</PageTitle>
      <Text>
        Вернитесь на <Link to="/">главную</Link> или выберите нужную страницу в меню.
      </Text>
    </Container>
  </Layout>
)

export default NotFoundPage
