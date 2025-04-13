package ut.edu.project_java.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ut.edu.project_java.models.SupportRequest;
import ut.edu.project_java.repositories.SupportRequestRepository;

import java.util.Optional;

@Service
public class SupportRequestService {

    @Autowired
    private SupportRequestRepository repository;

    public Long createSupport(SupportRequest request) {
        return repository.save(request).getId();
    }

    public Optional<SupportRequest> getSupportById(Long id) {
        return repository.findById(id);
    }
}
