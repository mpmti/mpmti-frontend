import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Store, select } from '@ngrx/store';
import { State, IssuesState } from 'src/app/reducers/state';
import { selectIssuesState } from 'src/app/reducers/issues.selector';
import { take } from 'rxjs/operators';


@Component({
    selector: 'app-graph-node-info-sheet',
    templateUrl: './graph-node-info-sheet.component.html',
    styleUrls: ['./graph-node-info-sheet.component.css']
})
export class GraphNodeInfoSheetComponent implements OnInit {

    issues: IssuesState;

    constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private bottomSheetRef: MatBottomSheetRef<GraphNodeInfoSheetComponent>, private store: Store<State>) { }

    ngOnInit() {
        this.store.pipe(select(selectIssuesState), take(1)).subscribe(issues => {
            this.issues = issues;
        });
    }

    editComponent() {
        this.bottomSheetRef.dismiss();
        // TODO implement
    }

    removeComponent() {
        this.bottomSheetRef.dismiss();
        // TODO implement
    }

    newIssue() {
        this.bottomSheetRef.dismiss();
        // TODO implement
    }

    editIssue(issueId: string) {
        this.bottomSheetRef.dismiss();
        // TODO implement
    }
}