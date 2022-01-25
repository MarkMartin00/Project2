package com.revature;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import com.revature.controller.UserController;
import com.revature.data.UserRepo;
import com.revature.exceptions.UserNotFoundException;
import com.revature.models.User;
import com.revature.service.UserService;

@SpringBootTest
@ActiveProfiles("test")
public class UserServiceTests {
	
	@Autowired
	UserController ucontroller;
	
	@Autowired
	UserService userv;
	
//	@Autowired
	User user;
	
	
	@BeforeEach
	public void setup() {
		userv = new UserService();
		
		ucontroller = new UserController();
		user = new User();		
		ucontroller.userServ = userv;
		
	}
	
	@AfterEach
	public void tearDown() {
		userv = null;
		ucontroller = null;
		user = null;
		
	}
	
	@Test
	public void testGetAllReturnsSet() {
		
		userv = mock(UserService.class);
		ucontroller.userServ = userv;
		user = new User("firstName", "lastName", "username", "password");
		Set<User> users = new HashSet<>();
		users.add(user);
		when(userv.findAll()).thenReturn(users);

		assertEquals(users,ucontroller.getAll());
		
	}
	
	@Test
	public void testfindNonExistantUsername_RaiseException() {
		
		assertThrows(NullPointerException.class,
				() -> {
					ucontroller.findByUsername("");
				});
		
	}

}
