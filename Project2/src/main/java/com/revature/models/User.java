package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="id")
public class User {

	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String firstName;
	private String lastName;
	
	@NotBlank
	@Pattern(regexp="[a-zA-Z][a-zA-Z0-9]*")
	private String username;
	
//	@Email
//	private String email;
	
	@NotEmpty
	private String password;

	public User(String firstName, String lastName,
			@NotBlank @Pattern(regexp = "[a-zA-Z][a-zA-Z0-9]*") String username,
			@NotEmpty String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;

		this.password = password;
	}
	
}
