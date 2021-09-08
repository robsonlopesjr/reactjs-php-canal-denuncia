<?php
// Cabeçalhos
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

include_once 'conexao.php';

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);

if ($dados) {

	$query_report = "SELECT * FROM report WHERE hash = :hash";
	$result_report = $conn->prepare($query_report);

	$result_report->bindParam(':hash', $dados['hash'], PDO::PARAM_STR);

	$result_report->execute();

	if (($result_report) and ($result_report->rowCount() != 0)) {
		$row_report = $result_report->fetch(PDO::FETCH_ASSOC);
		extract($row_report);
	    
	    $report = [
	    	'id' => $id,
	    	'hash' => $hash,
	    	'message' => $message,
	    	'created_at' => $created_at
	    ];

		$response = [
			"erro" => false,
			"message" => "",
			"records" => $report
		];
	    
	} else {
		$response = [
			"erro" => true,
			"message" => "Não foi possível encontrar nenhuma informação com o código de acompanhamento informado!",
			"records" => ""
		];
	}
} else {
	$response = [
		"erro" => true,
		"message" => "Ocorreu um erro ao pesquisar o código de acompanhamento digitado, tente novamente mais tarde!",
		"records" => ""
	];
}

http_response_code(200);

echo json_encode($response);