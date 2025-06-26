<?php

    header('Content-Type: application/json');

    $json = file_get_contents("pessoa.json");

    $data = json_decode($json, true);

    $pessoas = $data['items'];
    $total = count($pessoas);

    $colunas = [

        "Nome",
        "Sobrenome",
        "Idade"

    ];

    $inicio = intval($_REQUEST['start']);
    $quantidade = intval($_REQUEST['length']);

    $order_coluna = $_REQUEST['order'][0]['column'];
    $order_dir = $_REQUEST['order'][0]['dir'];
    $coluna_ordenar = $colunas[$order_coluna];

    $busca = $_REQUEST['search']['value'] ?? '';

    if (!empty($busca)) {

        $pessoas = array_filter($pessoas, function ($item) use ($busca) {

            foreach ($item as $value) {

                if (stripos((string)$value, $busca) !== false) {

                    return true;

                }

            }

            return false;

        });

    }

    $total_filtrado = count($pessoas);

    usort($pessoas, function ($a, $b) use ($coluna_ordenar, $order_dir) {

        if (!isset($a[$coluna_ordenar]) || !isset($b[$coluna_ordenar])) {

            return 0;

        } else {

            $valA = $a[$coluna_ordenar];
            $valB = $b[$coluna_ordenar];
            if ($valA == $valB) {

                return 0;

            } else {

                return ($order_dir === 'asc') ? ($valA < $valB ? -1 : 1) : ($valA > $valB ? -1 : 1);

            }
                
        }
        
    });

    $pessoas_paginados = array_slice($pessoas, $inicio, $quantidade);

    $retorno = [

        "draw" => intval($_REQUEST['draw']),
        "recordsTotal" => $total,
        "recordsFiltered" => $total_filtrado,
        "data" => []

    ];

    foreach ($pessoas_paginados as $item) {

        $retorno["data"][] = [

            $item["Nome"],
            $item["Sobrenome"],
            $item["Idade"]

        ];

    }

    echo json_encode($retorno);

?>