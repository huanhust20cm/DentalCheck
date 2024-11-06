using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Model
{
    public class InformationModel : BaseApiModel
    {
        public string? NumberCard { get; set; }
        public string? Name { get; set; }
        public string? NameDental { get; set; }
        public string? ActivationDate { get; set; }
        public string? DeadlineDate { get; set; }
        public string? Phone { get; set; }
        public string? DateOfBirth { get; set; }
        public string? Doctor { get; set; }
        public string? Teeth { get; set; }
        public string? Labo { get; set; }
        public string? Type { get; set; }
        public string? Source { get; set; }
        public string? NumberOfTeeth { get; set; }
        public string? ToothPosition { get; set; }
    }
}
