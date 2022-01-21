package com.revature.models;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="character_sheet")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CharacterSheet {
	
	private int id;
	
	public User owner;
	
	public String jsonSheet;

}
