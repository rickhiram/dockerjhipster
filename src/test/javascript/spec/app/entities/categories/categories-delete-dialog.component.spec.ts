/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { Jhipster2TestModule } from '../../../test.module';
import { CategoriesDeleteDialogComponent } from 'app/entities/categories/categories-delete-dialog.component';
import { CategoriesService } from 'app/entities/categories/categories.service';

describe('Component Tests', () => {
    describe('Categories Management Delete Component', () => {
        let comp: CategoriesDeleteDialogComponent;
        let fixture: ComponentFixture<CategoriesDeleteDialogComponent>;
        let service: CategoriesService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Jhipster2TestModule],
                declarations: [CategoriesDeleteDialogComponent]
            })
                .overrideTemplate(CategoriesDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CategoriesDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CategoriesService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
