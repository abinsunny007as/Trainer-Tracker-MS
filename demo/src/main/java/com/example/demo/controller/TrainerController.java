package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Trainer;
import com.example.demo.repository.TrainerRepository;
//import net.javaguides.springboot.exception.ResourseNotFoundException;
@RestController

@CrossOrigin(origins="http://localhost:4200")
public class TrainerController {
	@Autowired
	private TrainerRepository trainerRepository;
	
	//1. Create Trainers REST API
	@PostMapping("/trainer")
	public Trainer createTrainer(@RequestBody Trainer trainer) {
		return trainerRepository.save(trainer);
	}
	
	//2. Get all Trainers REST API
	@GetMapping("/trainer")
	public List<Trainer> getAllTrainers(){
		return trainerRepository.findAll();
	}

	
	//3. Get one Trainer by id REST API
	@GetMapping("/trainer/{id}")
	public Trainer getTrainerById(@PathVariable long id){
		  return trainerRepository.findById(id).orElse(null);
				
	}

	//4. Update one Trainer REST API
	@PutMapping("/trainer/{id}")
	public Trainer updateTrainer(Trainer trainer) {
        Trainer existingTrainer = trainerRepository.findById(trainer.getId()).orElse(null);
        existingTrainer.setName(trainer.getName());
        existingTrainer.setBatchname(trainer.getBatchname());
        existingTrainer.setDomain(trainer.getDomain());
        existingTrainer.setSubject(trainer.getSubject());
        existingTrainer.setStime(trainer.getStime());
        existingTrainer.setEtime(trainer.getEtime());
        return trainerRepository.save(existingTrainer);
    }
	
	
	//5. Delete Trainers REST API
	@DeleteMapping("trainer/{id}")
	public String deleteTrainer( long id) {
        trainerRepository.deleteById(id);
        return "Trainer removed !! " + id;
    }
	
	
}
