/* This file tracks update (added/changed/deprecated/removed) tags, so that
 * the core documentation can be used with multiple release branches.
 *
 * These tags can be used with the Dovecot markdown extensions (added,
 * changed, deprecated, removed), e.g., "[[added,tag_name]]".
 *
 * Keys are the tags used to identify the change, values are the version
 * number. */

export const updates = {

	/* Tags used in pages. */

	argon_2i_schemes: '2.4.0',
	argon2_password_scheme_added: '2.4.0',
	auth_mechanism_scram_sha_added: '2.4.0',
	cassandra_log_retries_added: '2.4.0',
	crypt_des_md5_schemes: '2.4.0',
	auth_client_common_secured: '2.4.0',
	auth_nss: '2.3.0',
	auth_policy_fail_type: '2.4.0',
	auth_policy_reject: '2.4.0',
	auth_server_common_secured: '2.4.0',
	dcrypt_same_cipher_algo_added: '2.4.0',
	dict_idle_timeout_added: '2.4.0',
	dict_protocol_v4: '2.4.0',
	dict_slow_warn_added: '2.4.0',
	doveadm_ex_expired_code: '2.4.0',
	doveadm_mailbox_commands_user: '2.4.0',
	extra_fields_empty: '2.4.0',
	event_export_transports_file_unix_added: '2.4.0',
	fs_crypt_require_encryption_keys: '2.4.0',
	fts_flatcurve: '2.4.0',
	imapc_features_no_acl: '2.4.0',
	imapc_features_no_delay_login: '2.4.0',
	imapc_features_no_fetch_bodystructure: '2.4.0',
	imapc_features_no_fetch_headers: '2.4.0',
	imapc_features_no_fetch_size: '2.4.0',
	imapc_features_no_modseq: '2.4.0',
	imapc_features_no_qresync: '2.4.0',
	imapc_features_no_search: '2.4.0',
	imapsieve_filters: '2.4.0',
	ja3_identifier: '2.4.0',
	lazy_expunge_namespace: '2.3.0',
	ldap_multi_added: '2.4.0',
	lmtp_nologin_added: '2.4.0',
	lua_auth_init: '2.4.0',
	lua_dns_client: '2.4.0',
	lua_script_init: '2.4.0',
	mail_crypt_eddsa: '2.4.0',
	mail_crypt_fs_maybe: '2.4.0',
	mail_location_keep_noselect: '2.4.0',
	mail_location_no_noselect: '2.4.0',
	metric_group_by_discrete_modifiers_added: '2.4.0',
	migration_imapc_features: '2.4.0',
	pbkdf2_hashing: '2.4.0',
	process_title_imap_process: '2.4.0',
	process_title_initializing: '2.4.0',
	process_title_mail_processes: '2.4.0',
	service_auth_listener_type: '2.4.0',
	service_dict_expire: '2.4.0',
	service_listener_type: '2.4.0',
	sieve_ext_imapflags: '2.4.0',
	sieve_ext_notify: '2.4.0',
	sieve_vnd_duplicate: '2.4.0',
	sqlite_filename: '2.4.0',
	weak_password_schemes: '2.4.0',

	/* Tags used in doveadm.js */

	doveadm_proxy_kick_args: '2.4.0',
	doveadm_proxy_list_args_added: '2.4.0',
	doveadm_proxy_list_response_changed: '2.4.0',
	doveadm_save_args_added: '2.4.0',

	/* Tags used in events.js */

	events_dns_worker_request_finished_cached_added: '2.4.0',
	events_imap_id_received_added: '2.4.0',
	events_login_aborted_added: '2.4.0',
	events_mail_storage_service_user_service_added: '2.4.0',
	events_mail_metadata_accessed_added: '2.4.0',
	events_net_in_bytes_changed: '2.4.0',
	events_net_out_bytes_changed: '2.4.0',
	events_pop3_command_finished_added: '2.4.0',
	events_proxy_session_finished_error_code_added: '2.4.0',
	events_proxy_session_finished_idle_usecs_changed: '2.4.0',
	events_smtp_server_transaction_rcpt_finished_dest_host_added: '2.4.0',
	events_smtp_server_transaction_rcpt_finished_dest_ip_added: '2.4.0',
	events_sql_query_finished_consistency_added: '2.4.0',

	/* Tags used in settings.js. */

	settings_auth_allow_cleartext_added: '2.4.0',
	settings_auth_allow_weak_schemes_added: '2.4.0',
	settings_auth_debug_deprecated: '2.4.0',
	settings_auth_default_domain_added: '2.4.0',
	settings_auth_internal_failure_delay_added: '2.4.0',
	settings_auth_policy_request_attributes_changed: '2.4.0',
	settings_dovecot_config_version_added: '2.4.0',
	settings_dovecot_storage_version_added: '2.4.0',
	settings_fts_autoindex_exclude_namespaces_changed: '2.4.0',
	settings_fts_message_max_size_added: '2.4.0',
	settings_fts_tika_changed_auth: '2.4.0',
	settings_imapc_features_changed: '2.4.0',
	settings_login_socket_path_added: '2.4.0',
	settings_mail_cache_max_headers_count_added: '2.4.0',
	settings_mail_cache_max_header_name_length_added: '2.4.0',
	settings_namespace_mailbox_special_use_changed: '2.4.0',
	settings_quota_clone_unset_added: '2.4.0',
	settings_quota_mailbox_count_added: '2.4.0',
	settings_quota_mailbox_message_count_added: '2.4.0',
	settings_submission_add_received_header_added: '2.4.0',

}
