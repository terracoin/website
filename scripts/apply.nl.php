<?php
/* 	
Als u deze tekst in uw browser ziet, is PHP niet correct geconfigureerd op deze hostingprovider.
Neem contact op met uw hostingprovider met betrekking tot de PHP-configuratie voor uw site.
PHP-bestand gegenereerd door Adobe Muse CC 2018.1.0.386
*/
require_once('form_process.php');
$form = array(
	'subject' => 'Indienen van Teamformulieren',
	'heading' => 'Nieuwe Formulierinzending',
	'success_redirect' => '/team-nl/',
	'resources' => array(
		'checkbox_checked' => 'Aangevinkt',
		'checkbox_unchecked' => 'Uitgevinkt',
		'submitted_from' => 'Formulier verstuurd van de website: %s',
		'submitted_by' => 'Bezoeker IP adres: %s',
		'too_many_submissions' => 'Te veel recente inzendingen van dit IP',
		'failed_to_send_email' => 'Verzenden van e-mail is mislukt',
		'invalid_reCAPTCHA_private_key' => 'Ongeldige reCAPTCHA persoonlijke sleutel.',
		'invalid_reCAPTCHA2_private_key' => 'Ongeldige reCAPTCHA 2.0 persoonlijke sleutel.',
		'invalid_reCAPTCHA2_server_response' => 'Ongeldig reCAPTCHA 2.0 server antwoord.',
		'invalid_field_type' => 'Onbekend veldtype \'%s\'.',
		'invalid_form_config' => 'Veld \'%s\' heeft een ongeldige configuratie.',
		'unknown_method' => 'Onbekende serveraanvraagmethode'
	),
	'email' => array(
		'from' => 'noreply@terracoin.io',
		'to' => 'support@terracoin.io'
	),
	'fields' => array(
		'name' => array(
			'order' => 1,
			'type' => 'string',
			'label' => 'Naam',
			'required' => true,
			'errors' => array(
				'required' => 'Veld \'Name\' is vereist.'
			)
		),
		'email' => array(
			'order' => 2,
			'type' => 'email',
			'label' => 'Email',
			'required' => true,
			'errors' => array(
				'required' => 'Veld \'Email\' is vereist.',
				'format' => 'Veld \'Email\' heeft een ongeldige e-mail.'
			)
		),
		'message' => array(
			'order' => 3,
			'type' => 'string',
			'label' => 'Bericht',
			'required' => false,
			'errors' => array(
			)
		)
	)
);
process_form($form);
?>
