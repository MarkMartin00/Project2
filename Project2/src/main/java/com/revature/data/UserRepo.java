package com.revature.data;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.models.User;

@Repository
public interface UserRepo extends JpaRepository <User, Integer> {
	
	Optional<User> findByUsername(String username);
	
	public List<User> findByOrderByLastName();
	
	public void deleteById(int id);
	
//	@Query("FROM users WHERE email LIKE %:pattern")
//	public List<User> findByEmailContains(String pattern);

}
