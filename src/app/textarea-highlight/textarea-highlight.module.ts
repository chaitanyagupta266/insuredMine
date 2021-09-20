import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TextareaHighlightComponent } from "./textarea-highlight/textarea-highlight.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TextareaHighlightComponent],
  exports: [TextareaHighlightComponent]
})
export class TextareaHighlightModule {}
