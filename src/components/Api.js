import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';

const Buttonstyled = {
     border: 'none',
    marginLeft: '500px',
    widht: '100px',
    backgroundColor: '#4CAF50',
    textDecoration: 'none',
    fontSize: '16px'
}

const Input = {
    marginLeft: '500px',
    widht: '100%',
    padding: '12px',
    resize: 'vertical'
} 

class Api extends Component

{


    delete()
    
    {
        localStorage.removeItem('id');
        localStorage.removeItem('cnpj');
        localStorage.removeItem('nome');
        localStorage.removeItem('data_fundacao');
        localStorage.removeItem('situacao_receita');
        localStorage.removeItem('situacao_receita_data');
    }

    rest()
    
    {

        const id = document.getElementById('id');

        const cnpj = document.getElementById('cnpj');
        
        const nome = document.getElementById('nome');
        
        const data_fundacao = document.getElementById('data_fundacao');
        
        const situacao_receita = document.getElementById('situacao_receita');
        
        const situacao_receita_data = document.getElementById('situacao_receita_data');
        
        const api = "https://5ab2810762a6ae001408c26e.mockapi.io/api/dados-empresa/empresa?search="+cnpj.value;
        
        const httpRequest = new XMLHttpRequest();

            httpRequest.open("GET", api);
            httpRequest.responseType = "json";
            httpRequest.addEventListener("readystatechange", function () {

            if (httpRequest.readyState == 4){
                if (httpRequest.status == 200){

                    window.localStorage.setItem('id', httpRequest.response[0].id);

                    window.localStorage.setItem('cnpj', httpRequest.response[0].cnpj);
                    
                    window.localStorage.setItem('nome', httpRequest.response[0].nome);
                    
                    window.localStorage.setItem('data_fundacao', httpRequest.response[0].data_fundacao);
                    
                    window.localStorage.setItem('situacao_receita', httpRequest.response[0].situacao_receita);
                    
                    window.localStorage.setItem('situacao_receita_data', httpRequest.response[0].situacao_receita_data);

                    id.innerHTML = httpRequest.response[0].id;
                    
                    nome.innerHTML = httpRequest.response[0].nome;

                    cnpj.innerHTML = httpRequest.response[0].cnpj;
                    
                    data_fundacao.innerHTML = httpRequest.response[0].data_fundacao;
                    
                    situacao_receita.innerHTML = httpRequest.response[0].situacao_receita;
                    
                    situacao_receita_data.innerHTML = httpRequest.response[0].situacao_receita_data;

                }
            }
        });

        httpRequest.send();

        
    };

    render()
    
    {

        return(
            <div class="container">

                <div class=""> 
                    <div class="">
                            <h2 align="center"> Teste API </h2>
                        <input style={Input}type="text" class="form-control" id="cnpj" placeholder="Busque aqui o cnpj..."/>
                    </div>
                    <br />
                    <div class="col-6 col-md-6 col-xs-6 form-group">
                        <Button style={Buttonstyled} class="positive ui button" onClick={this.rest}>Pesquisar</Button>
                    </div>
                </div>
               <br /> 
                
                <div align="center">
                    <Table class="ui fixed single line celled table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th> 
                                <th scope="col">Nome</th> 
                                <th scope="col">CNPJ</th> 
                                <th scope="col">Data de Fundação</th> 
                                <th scope="col">Situação da Receita</th> 
                                <th scope="col">Situação da Receita Data</th> 

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th id="id"></th>
                                <td id="nome"></td>
                                <td id="cnpj"></td>
                                <td id="data_fundacao"></td>
                                <td id="situacao_receita"></td>
                                <td id="situacao_receita_data"></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        
        );
    }
}

export default Api