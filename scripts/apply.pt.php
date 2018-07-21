<?php
/* 	
Se consegue ler este texto no seu navegador, o PHP não está configurado corretamente neste serviço de hospedagem. 
Contacte o seu serviço de hospedagem relativamente à configuração do PHP para o seu site.
Ficheiro PHP gerado por Adobe Muse CC 2018.1.0.386
*/
require_once('form_process.php');
$form = array(
	'subject' => 'Submissão de formulário de equipa',
	'heading' => 'Nova submissão de formulário',
	'success_redirect' => '/equipa/',
	'resources' => array(
		'checkbox_checked' => 'Verificado',
		'checkbox_unchecked' => 'Não verificado',
		'submitted_from' => 'Formulário enviado pelo site: %s',
		'submitted_by' => 'Endereço de IP do visitante: %s',
		'too_many_submissions' => 'Demasiadas submissões recentes deste endereço de IP',
		'failed_to_send_email' => 'Falha ao enviar o email',
		'invalid_reCAPTCHA_private_key' => 'Chave privada do reCAPTCHA inválida.',
		'invalid_reCAPTCHA2_private_key' => 'Chave privada do reCAPTCHA 2.0 inválida.',
		'invalid_reCAPTCHA2_server_response' => 'Resposta inválida do servidor reCAPTCHA 2.0.',
		'invalid_field_type' => 'Tipo \'%s\' - Tipo de campo inválido.',
		'invalid_form_config' => 'Campo \'%s\' tem uma configuração inválida.',
		'unknown_method' => 'Método de solicitação do servidor é inválido'
	),
	'email' => array(
		'from' => 'noreply@terracoin.io',
		'to' => 'support@terracoin.io'
	),
	'fields' => array(
		'name' => array(
			'order' => 1,
			'type' => 'string',
			'label' => 'Nome',
			'required' => true,
			'errors' => array(
				'required' => 'O campo \'Nome\' é obrigatório.'
			)
		),
		'email' => array(
			'order' => 2,
			'type' => 'email',
			'label' => 'Email',
			'required' => true,
			'errors' => array(
				'required' => 'O campo \'Email\' é obrigatório.',
				'format' => 'O campo \'Email\' tem um email inválido.'
			)
		),
		'message' => array(
			'order' => 3,
			'type' => 'string',
			'label' => 'Mensagem',
			'required' => false,
			'errors' => array(
			)
		)
	)
);
process_form($form);
?>