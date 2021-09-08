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

	$query_produto = "INSERT INTO report (hash, message, created_at) VALUES (:hash, :message, :created)";
	$cad_produto = $conn->prepare($query_produto);

	$date =  date('Y-m-d H:i:s');

	$cad_produto->bindParam(':hash', $dados['hash'], PDO::PARAM_STR);
	$cad_produto->bindParam(':message', $dados['message'], PDO::PARAM_STR);
	$cad_produto->bindParam(':created', $date);

	$cad_produto->execute();

	if ($cad_produto->rowCount()) {
		$response = [
			"erro" => false,
			"mensagem" => "Relato cadastrado com sucesso!",
			"dados" => $dados['hash']
		];

	} else {
		$response = [
			"erro" => true,
			"mensagem" => "Ocorreu um erro ao enviar o relato, tente novamente mais tarde."
		];
	}
	
} else {
	$response = [
		"erro" => true,
		"mensagem" => "Ocorreu um erro ao enviar o relato, tente novamente mais tarde!"
	];
}

http_response_code(200);

echo json_encode($response);